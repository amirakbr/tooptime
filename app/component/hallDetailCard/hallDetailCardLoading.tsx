const HallDetailCardLoading = () => {
  return (
    <div className="h-full animate-pulse">
      <div className="flex flex-col gap-4 w-full h-full bg-slate-300 border-2 border-slate-500 rounded-lg p-2">
        <div className="animate-pulse bg-slate-200 w-full h-[200px] rounded"></div>
        <div className="animate-pulse bg-slate-200 w-[90%] py-3 rounded"></div>
        <div className="animate-pulse bg-slate-200 w-[60%] py-3 rounded"></div>
        <div className="animate-pulse bg-slate-200 w-[60%] py-3 rounded"></div>
      </div>
    </div>
  );
};

export default HallDetailCardLoading;
