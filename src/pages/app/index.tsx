import { useState } from "react";
import { AddEngagementForm } from "~/components/addEngagement";
import { AccountFormValues } from "~/components/addEngagement/schema";
import { AppLayout } from "~/components/appLayout";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { toast } from "~/components/ui/use-toast";
import { api } from "~/utils/api";

const AppPage = () => {
  const [open, setOpen] = useState(false);
  const { data } = api.engament.getAll.useQuery();
  console.log(data);
  const addEngagement = api.engament.create.useMutation({
    onSuccess: () => {
      toast({
        title: "Created!",
      });
      setOpen(false);
    },
  });
  async function onSubmit(data: AccountFormValues) {
    const placeData = await fetch(
      `https://places.googleapis.com/v1/places/${data.location.value.place_id}?fields=addressComponents,formattedAddress,googleMapsUri,location,plusCode,shortFormattedAddress,utcOffsetMinutes,types,viewport&key=${process.env.NEXT_PUBLIC_GPLACES_KEY}`,
    ).then((rsp) => rsp.json());
    await addEngagement.mutateAsync({
      ...data,
      location: placeData,
    });
  }
  return (
    <AppLayout>
      <div className="flex w-full justify-end">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">Add new</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add new gig</SheetTitle>
            </SheetHeader>
            <div className="mt-8">
              <AddEngagementForm onSubmit={onSubmit} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <h1>Sup</h1>
        {data?.map((e) => JSON.stringify(e, null, 2))}
      </div>
    </AppLayout>
  );
};

export default AppPage;
