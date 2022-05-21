import { useAppSelector } from 'hooks';

type TMatchProps = {
  sickNm: string;
};

function Match({ sickNm }: TMatchProps) {
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );

  if (searchString && sickNm.indexOf(searchString) !== -1)
    return (
      <>
        {sickNm.split(searchString)[0]}
        <mark>{searchString}</mark>
        {sickNm.split(searchString)[1]}
      </>
    );
  return <div>{sickNm}</div>;
}

export default Match;
