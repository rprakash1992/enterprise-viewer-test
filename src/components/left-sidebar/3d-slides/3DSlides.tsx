import LeftSidebarLayout from "../LeftSidebarLayout";
import { ThreeDSlidesHeader } from "./3DSlidesHeader";
import { useStore } from "../../../store";
import type { ThreeDSlide } from "../../../store/3DSlidesSlice";
import { ThreeDSlidesFooter } from "./3DSlidesFooter";
import { ThreeDSlidesContent } from "./3DSlidesContent";

export const ThreeDSlides = () => {
  const threeDSlides = useStore((state) => state.threeDSlides);
  const selected3DSlide = useStore((state) => state.selected3DSlide);
  const addThreeDSlide = useStore((state) => state.addThreeDSlide);
  const selectSlide = useStore((state) => state.selectSlide);
  const deleteThreeDSlide = useStore((state) => state.deleteThreeDSlide);

  const handleSelectSlide = (_: React.MouseEvent, slide: ThreeDSlide) => {
    if (selected3DSlide?.id === slide.id) {
      selectSlide(null);
    } else {
      selectSlide(slide);
    }
  };

  const handleUpdate = () => {};

  const handleDuplicate = () => {};

  const handleDelete = () => {
    if (!selected3DSlide?.id) return;
    deleteThreeDSlide();
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ThreeDSlidesHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <ThreeDSlidesContent
          threeDSlides={threeDSlides}
          selected3DSlide={selected3DSlide}
          addThreeDSlide={addThreeDSlide}
          selectSlide={handleSelectSlide}
        />
      </LeftSidebarLayout.Content>
      {selected3DSlide?.id && (
        <LeftSidebarLayout.Footer>
          <ThreeDSlidesFooter
            handleUpdate={handleUpdate}
            handleDuplicate={handleDuplicate}
            handleDelete={handleDelete}
          />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};
