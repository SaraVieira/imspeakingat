import ReactCountryFlag from "react-country-flag";
import { JsonObject } from "@prisma/client/runtime/library";
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
import {
  differenceInDays,
  format,
  formatDistanceToNow,
  formatDistanceToNowStrict,
} from "date-fns";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { ConferenceCard } from "~/components/conference";

const AppPage = () => {
  const [open, setOpen] = useState(false);
  const { data, refetch } = api.engament.getAll.useQuery();
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
    refetch();
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
      {data && (
        <>
          <div>
            <h1 className="mb-8 text-xl font-bold">
              Your next conference is in{" "}
              {differenceInDays(
                data.future[0]?.Conference?.dateStart as Date,
                new Date(),
              )}{" "}
              days
            </h1>
            <div className="flex flex-col gap-4">
              {data?.future?.map((e) => <ConferenceCard {...e} />)}
            </div>
          </div>
          <div>
            <h1 className="my-8 text-xl font-bold text-muted-foreground">
              Past Conferences
            </h1>
            <div className="flex flex-col gap-4">
              {data?.past?.map((e) => <ConferenceCard {...e} past />)}
            </div>
          </div>
        </>
      )}
    </AppLayout>
  );
};

export default AppPage;
