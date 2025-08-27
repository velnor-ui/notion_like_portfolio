"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

// ---------------- Tabs Context ----------------
interface TabsContextValue {
  activeTab: string;
  onValueChange: (value: string) => void;
  prevIndex: number;
  currentIndex: number;
  tabs: string[];
  orientation: "horizontal" | "vertical";
  registerTab: (value: string) => void;
  tabsId: string;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs component");
  }
  return context;
}

// ---------------- Tabs Root ----------------
interface TabsProps {
  children: React.ReactNode;
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  orientation?: "horizontal" | "vertical";
  id?: string;
}

export function Tabs({
  children,
  defaultValue,
  value,
  onValueChange,
  className,
  orientation = "horizontal",
  id,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(value || defaultValue || "");
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const [tabs, setTabs] = useState<string[]>([]);

  // Generate unique ID for this tabs instance
  const [tabsId] = useState(
    () => id || `tabs-${Math.random().toString(36).substr(2, 9)}`,
  );

  const currentValue = value || activeTab;
  const currentIndex = tabs.findIndex((tab) => tab === currentValue);

  const handleValueChange = (newValue: string) => {
    setPrevIndex(currentIndex);
    if (!value) {
      setActiveTab(newValue);
    }
    onValueChange?.(newValue);
  };

  const registerTab = (tabValue: string) => {
    setTabs((prev) => {
      if (!prev.includes(tabValue)) {
        return [...prev, tabValue];
      }
      return prev;
    });
  };

  const contextValue: TabsContextValue = {
    activeTab: currentValue,
    onValueChange: handleValueChange,
    prevIndex,
    currentIndex,
    tabs,
    orientation,
    registerTab,
    tabsId,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        className={cn(
          "w-full",
          orientation === "vertical" && "flex gap-3",
          className,
        )}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// ---------------- TabsList ----------------
interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList({ children, className }: TabsListProps) {
  const { orientation } = useTabsContext();
  return (
    <div
      className={cn(
        "relative mb-4 flex gap-1 rounded-[12px] border bg-neutral-100 p-1 dark:border-neutral-800 dark:bg-neutral-900",
        orientation === "horizontal" && "flex-row",
        orientation === "vertical" && "w-fit flex-col",
        className,
      )}
      role="tablist"
      aria-orientation={orientation}
    >
      {children}
    </div>
  );
}

// ---------------- TabsTrigger ----------------
interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  indicatorClassName?: string;
  disabled?: boolean;
}

export function TabsTrigger({
  children,
  value,
  className,
  indicatorClassName,
  disabled = false,
}: TabsTriggerProps) {
  const { activeTab, onValueChange, tabs, orientation, registerTab } =
    useTabsContext();
  const isActive = activeTab === value;

  const tabsId = useTabsContext().tabsId;

  // Register this tab when component mounts
  useEffect(() => {
    registerTab(value);
  }, [value, registerTab]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const currentIdx = tabs.findIndex((tab) => tab === activeTab);
    if (orientation === "horizontal") {
      if (e.key === "ArrowRight") {
        onValueChange(tabs[(currentIdx + 1) % tabs.length]);
      } else if (e.key === "ArrowLeft") {
        onValueChange(tabs[(currentIdx - 1 + tabs.length) % tabs.length]);
      }
    } else {
      if (e.key === "ArrowDown") {
        onValueChange(tabs[(currentIdx + 1) % tabs.length]);
      } else if (e.key === "ArrowUp") {
        onValueChange(tabs[(currentIdx - 1 + tabs.length) % tabs.length]);
      }
    }
  };

  return (
    <button
      onClick={() => !disabled && onValueChange(value)}
      onKeyDown={handleKeyDown}
      role="tab"
      aria-selected={isActive}
      aria-controls={`tab-panel-${value}`}
      id={`tab-${value}`}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      className={cn(
        "relative z-10 whitespace-nowrap rounded-[12px] px-2 py-1 text-sm font-medium transition-colors duration-200 focus:outline-hidden disabled:opacity-50 md:px-4 md:py-2",
        isActive
          ? "text-black dark:text-white"
          : "text-neutral-500 hover:text-black dark:hover:text-white",
        orientation === "vertical" && "w-full text-left",
        className,
      )}
    >
      {/* Indicator with layoutId for smooth transitions */}
      {isActive && (
        <motion.div
          layoutId={tabsId + "-underline"}
          className={cn(
            "absolute inset-0 z-0 rounded-[8px] bg-white shadow-xs dark:bg-black",
            indicatorClassName,
          )}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            duration: 0.3,
          }}
          style={{
            borderRadius: "8px",
          }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

// ---------------- TabsContent ----------------
interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  borderClassName?: string;
  height?: string;
}

export function TabsContent({
  children,
  value,
  className,
  borderClassName,
}: TabsContentProps) {
  const { activeTab, prevIndex, tabs } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive) return null;

  const currentIdx = tabs.findIndex((tab) => tab === activeTab);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[12px] border bg-white dark:border-neutral-800 dark:bg-black",
        borderClassName,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab}
          id={`tab-panel-${value}`}
          role="tabpanel"
          aria-labelledby={`tab-${value}`}
          initial={{
            opacity: 0,
            x: currentIdx > prevIndex ? 50 : -50,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          }}
          exit={{
            opacity: 0,
            x: currentIdx > prevIndex ? -30 : 30,
            scale: 0.98,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="h-full w-full p-1"
        >
          <div
            className={cn(
              "h-full w-full rounded-[8px] border bg-neutral-50 p-2 dark:bg-neutral-900",
              className,
            )}
          >
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
