export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-0 w-full bg-lightGrayish-background">
      <div className="absolute -z-10 h-40 w-full bg-primary bg-[url(./src/assets/bg-header-desktop.svg)] bg-cover bg-no-repeat"></div>
      <div className="h-[130px] w-full"></div>
      <div className="w-full bg-none px-6 md:px-10 lg:bottom-[35px] lg:px-20">
        {children}
      </div>
    </div>
  );
}
