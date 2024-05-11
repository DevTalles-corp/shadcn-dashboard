import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tab1 } from "./ui/tab1";
import { Tab2 } from "./ui/tab2";

export default function Page() {
  return (
    <div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="user">User</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Tab1 />
        </TabsContent>
        <TabsContent value="password">
          <Tab2 />
        </TabsContent>
        <TabsContent value="user">
          <div>User</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
