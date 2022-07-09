import React from 'react';
import Link from 'next/link';
import { useDispatchGetBlueprintList } from 'src/hooks';

const BlueprintList = () => {
  const [blueprintList, setBlueprintList] = React.useState<
    { id: string; name: string }[]
  >([]);
  const getBlueprintList = useDispatchGetBlueprintList();

  React.useEffect(() => {
    const getList = async () => {
      const { body } = await getBlueprintList();
      setBlueprintList(body.blueprints || []);
    };

    if (blueprintList.length === 0) {
      getList();
    }
  }, [getBlueprintList, setBlueprintList, blueprintList.length]);

  return (
    <>
      <div>Blueprints Page</div>
      <div>
        <Link href="/blueprints/create">
          <a>Create</a>
        </Link>
      </div>
      {blueprintList.map((blueprint) => (
        <div key={blueprint.id}>
          <Link href={`/blueprints/${blueprint.id}`}>
            <a>{blueprint.name}</a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlueprintList;
