function HeaderLink({ href, variant = "default", children }) {
    const baseClasses = "font-light text-[clamp(0.875rem,0.5vw+0.75rem,3rem)] font-[Inter] transition-all duration-200 ease-out hover:cursor-pointer active:cursor-progress"
    const defaultColors = "text-txt-main no-underline hover:text-[#5d99d4] active:text-[#cbe4fc]"
    const accentColors = "text-[#2563eb] underline hover:text-[#074f70] active:text-[#212121]"
    const user = "text-txt-main underline decoration-[#0f172a00] hover:decoration-[#0f172a] group-hover:decoration-[#0f172a]"
    let finalClasses;

    if (variant === "accent") {
        finalClasses = `${baseClasses} ${accentColors}`;
    } else {
        if (variant === "user") {
            finalClasses = `${baseClasses} ${user}`
        } else {
            finalClasses = `${baseClasses} ${defaultColors}`;
        }
    }
    
    return (
        <a href={href} className={finalClasses}>
            {children}
        </a>
    );
}
function HeaderImageLink({ href, src, alt }) {
    return (
        <a href={href} className="default-flex h-full w-auto">
            <img className="h-[80%] w-auto transition-all duration-200 ease-out border-b border-solid border-[#0f172a00] hover:cursor-pointer hover:scale-102 hover:border-b-txt-main active:cursor-progress" src={src} alt={alt}></img>
        </a>
    )
}
export function Header() {
    return (
        <header className="w-full h-[calc(clamp(48px,3rem,100px)+0.6rem)] bg-bg-block box-border p-[0.3rem] border-b-2 border-solid border-b-border-block default-flex justify-between gap-4 sticky top-0 z-5">
            <a className="default-flex h-full justify-center pl-4" href="/index.html">
                <img className="h-[80%] w-auto transition-all duration-200 ease-out hover:cursor-pointer hover:scale-102 active:cursor-progress" src="/images/logo-together.svg" alt="AccuFood - Главная страница."></img>
            </a>
            <nav className="default-flex h-full gap-8">
                <HeaderLink href="/">Главная</HeaderLink>
                <HeaderLink href="/" variant="accent">Калькулятор</HeaderLink>
                <HeaderLink href="/">Инструкция</HeaderLink>
                <HeaderLink href="/">БДП</HeaderLink>
            </nav>
            <div className="default-flex h-full gap-4 pr-4">
                <div className="group default-flex h-full font-extrabold text-txt-main gap-2 border-r-2 border-solid border-r-border-block pr-4">
                    {/* круглая обёртка */}
                    <a className="default-flex h-full w-auto transition-all duration-200 ease-out border border-solid border-txt-main rounded-full aspect-square overflow-hidden hover:scale-102 group-hover:scale-102">
                        {/* квадратная начинка */}
                        <img className="h-full w-full" src="/images/istockphoto-466167557-612x612.jpg"></img>
                        {/* для конкретно этого высота 100 %, для остальных внутриссылочных - 80 % */}
                    </a>
                    <HeaderLink href="/" variant="user">Абдурахман...</HeaderLink>
                </div>
                <HeaderImageLink href="/" src="/images/mail-icon.svg" alt="Почта проекта"></HeaderImageLink>
                <HeaderImageLink href="/" src="/images/settings-icon.svg" alt="Настройки"></HeaderImageLink>
            </div>
        </header>
    );
}