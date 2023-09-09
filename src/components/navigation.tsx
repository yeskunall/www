import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Navigation({
  currentTab = "about",
}: {
  currentTab: string;
}) {
  return (
    <div className="rounded-full bg-[#012000]/30">
      <Tabs
        defaultValue={currentTab === "" ? "about" : currentTab}
        craft-tabs-wrapper=""
        className="relative"
      >
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="about" craft-tab="" asChild>
            <a href="/" rel="prefetch">
              About
            </a>
          </TabsTrigger>
          <TabsTrigger value="projects" craft-tab="" asChild>
            <a href="/projects" rel="prefetch">
              Projects
            </a>
          </TabsTrigger>
          <TabsTrigger value="writing" craft-tab="" asChild>
            <a href="/writing" rel="prefetch">
              Blog
            </a>
          </TabsTrigger>
          <TabsTrigger value="now" craft-tab="" asChild>
            <a href="/now" rel="prefetch">
              Now
            </a>
          </TabsTrigger>
        </TabsList>
        <TabsList
          aria-hidden="true"
          craft-tabs-hidden=""
          className="transition-all"
        >
          <TabsTrigger value="about" craft-tab="">
            About
          </TabsTrigger>
          <TabsTrigger value="projects" craft-tab="">
            Projects
          </TabsTrigger>
          <TabsTrigger value="writing" craft-tab="">
            Blog
          </TabsTrigger>
          <TabsTrigger value="now" craft-tab="">
            Now
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
