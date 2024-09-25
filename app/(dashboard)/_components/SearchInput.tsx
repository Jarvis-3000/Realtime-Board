"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import qs from "query-string";
import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";

import { ChangeEvent, useState, useEffect } from "react";

export const SearchIput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useDebounceValue("", 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setDebouncedValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="max-w-[600px] bg-white shadow-sm pl-9 border-0 focus-visible:ring-2 focus-visible:ring-blue-500"
        placeholder="Search boards"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
