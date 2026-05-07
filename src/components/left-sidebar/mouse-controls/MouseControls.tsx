import { useStore } from "../../../store";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { MouseControlsHeader } from "./MouseControlsHeader";
import { MouseControlsContent } from "./MouseControlsContent";
import type { MouseControl } from "../../../store/MouseControlsSlice";
import { useState } from "react";

export const MouseControls = () => {
  const systemMouseControls = useStore((state) => state.systemMouseControls);
  const userMouseControls = useStore((state) => state.userMouseControls);
  const setUserMouseControls = useStore((state) => state.setUserMouseControls);
  const [value, setValue] = useState<string | null>("");

  const handlePlusClick = () => {
    const newId = userMouseControls.length;
    const newUserMouseControl: MouseControl = {
      id: "user_ontrol_" + newId,
      title: "User Control " + newId,
      items: [
        {
          control: "Right",
          action: "PAN",
        },
        {
          control: "Left",
          action: "ROTATE",
        },
        {
          control: "None",
          action: "POINT_ZOOM_IN",
        },
        {
          control: "None",
          action: "POINT_ZOOM_OUT",
        },
        {
          control: "Middle",
          action: "ZOOM_IN",
        },
        {
          control: "Middle",
          action: "ZOOM_OUT",
        },
      ],
    };

    setUserMouseControls([...userMouseControls, newUserMouseControl]);
  };

  const handleSelectControl = (j: number, val: string | null) => {
    const editingUserControl = userMouseControls.find(
      (ctrl) => ctrl.id === value,
    );

    if (!editingUserControl) return;

    editingUserControl.items[j]["control"] = val;

    setUserMouseControls(
      userMouseControls.map((ctrl) =>
        ctrl.id === value ? editingUserControl : ctrl,
      ),
    );
  };

  const handleSelectAction = (j: number, val: string | null) => {
    const editingUserControl = userMouseControls.find(
      (ctrl) => ctrl.id === value,
    );

    if (!editingUserControl) return;

    editingUserControl.items[j]["action"] = val;

    setUserMouseControls(
      userMouseControls.map((ctrl) =>
        ctrl.id === value ? editingUserControl : ctrl,
      ),
    );
  };

  // const handleSaveUserControl = () => {
  //   const userControl = userMouseControls.find((ctrl) => ctrl.id === value);
  //   if (!userControl) return;

  //   userControl.items = selectedActions.map((action, index: number) => ({
  //     action,
  //     control: selectedControls[index],
  //   }));

  //   setUserMouseControls(
  //     userMouseControls.map((ctrl) => (ctrl.id === value ? userControl : ctrl))
  //   );
  //   setValue(null);
  // };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <MouseControlsHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content noPadding>
        <MouseControlsContent
          systemMouseControls={systemMouseControls}
          userMouseControls={userMouseControls}
          value={value}
          setValue={setValue}
          onPlusClick={handlePlusClick}
          onSelectControl={handleSelectControl}
          onSelectAction={handleSelectAction}
        />
      </LeftSidebarLayout.Content>
      {/* <LeftSidebarLayout.Footer>
        {value && (
          <Box p={"lg"}>
            <Button fullWidth onClick={handleSaveUserControl}>
              Save
            </Button>
          </Box>
        )}
      </LeftSidebarLayout.Footer> */}
    </LeftSidebarLayout>
  );
};
