import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React from "react";

export function page() {
  const tags = Array.from({ length: 20 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
  return (
    <div className="flex items-center w-full gap-2">
      <ScrollArea className="w-2/3 h-screen rounded-md">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <>
              <div key={tag} className="text-sm">
                {tag}
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
      <div className="w-1/3 h-screen px-2 bg-slate-800">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        veniam, blanditiis quia ad doloremque nulla, provident, hic voluptate
        exercitationem facere ipsum. Eos reiciendis voluptatibus et illum
        quibusdam voluptate facilis exercitationem!
      </div>
    </div>
  );
}

export default page;
