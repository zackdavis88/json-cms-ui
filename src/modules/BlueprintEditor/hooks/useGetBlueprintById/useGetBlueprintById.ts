import React from 'react';
import { RootState } from 'src/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { getBlueprint } from 'src/store/actions';

const useGetBlueprintById = (blueprintId: string | string[] | undefined) => {
  const isUpdatePage = !!blueprintId;
  const dispatch = useDispatch();
  const hasRootFields = useSelector(
    ({ blueprint }: RootState) => !!blueprint.rootFields.length,
  );
  const needsBlueprintData = React.useRef<boolean>(isUpdatePage && !hasRootFields);

  React.useEffect(() => {
    if (blueprintId && needsBlueprintData.current) {
      const loadBlueprintData = async (blueprintId: string | string[]) => {
        await dispatch(getBlueprint(blueprintId));
      };

      loadBlueprintData(blueprintId);
      needsBlueprintData.current = false;
    }
  }, [blueprintId, dispatch]);

  return needsBlueprintData.current;
};

export default useGetBlueprintById;
