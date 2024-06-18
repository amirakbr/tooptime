import HallDetailCardLoading from '../../hallDetailCard/hallDetailCardLoading';

const PopularFieldsLoading = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold animate-pulse bg-slate-400/40 w-32 py-5 rounded"></h2>
      <div className="grid grid-cols-4 grid-rows-[20rem] gap-4">
        <HallDetailCardLoading />
        <HallDetailCardLoading />
        <HallDetailCardLoading />
        <HallDetailCardLoading />
      </div>
    </div>
  );
};
export default PopularFieldsLoading;
