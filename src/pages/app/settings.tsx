import { Separator } from "../../components/ui/separator";

import { AppLayout } from "~/components/appLayout";
import { SettingsForm } from "~/components/userSettings";

export default function SettingsAccountPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Account</h3>
          <p className="text-sm text-muted-foreground">
            Update your user settings, including what is seen on your public
            profile
          </p>
        </div>
        <Separator />
        <SettingsForm />
      </div>
    </AppLayout>
  );
}
