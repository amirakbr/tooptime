import ToopitaLogo from '../toopitaLogo';

const HeaderSection = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <ToopitaLogo />
      </div>
    </header>
  );
};

export default HeaderSection;
