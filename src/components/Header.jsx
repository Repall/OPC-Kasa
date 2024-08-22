import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="flex flex-row justify-between  py-5 md:py-12 px-5 md:px-20">
                <svg className="w-36 max-sm:w-24 max-sm:h-16" width="211" height="68" viewBox="0 0 211 68" fill="#FF6060" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.5745 34.6485L9.34014 46.1362V62.2561H0.5V0H9.34014V34.8338L42.859 0H52.9883L26.6521 27.9782L54.83 62.2561H44.5165L20.5745 34.6485Z"
                        fill="#FF6060"
                    />
                    <path
                        d="M119.289 57.2534L122.789 50.5831C126.84 53.3624 133.102 55.4005 139.18 55.4005C147.099 55.4005 150.23 52.9918 150.23 48.9155C150.23 38.3542 120.578 47.4332 120.578 28.7193C120.578 20.1962 128.129 14.6376 140.1 14.6376C146.178 14.6376 153.176 16.3052 157.228 18.8992L153.545 25.5695C149.309 22.7902 144.705 21.8638 140.1 21.8638C132.734 21.8638 129.05 24.6431 129.05 28.3488C129.05 39.4659 158.702 30.3869 158.702 48.7302C158.702 57.2534 150.966 62.6267 138.443 62.6267C130.892 62.812 123.157 60.4033 119.289 57.2534Z"
                        fill="#FF6060"
                    />
                    <path
                        d="M210.822 33.7221V62.2561H202.718V55.9564C199.956 60.218 194.615 62.6267 187.248 62.6267C176.566 62.6267 169.936 56.8828 169.936 48.7303C169.936 41.1335 174.724 35.0191 188.721 35.0191H202.166V33.3515C202.166 26.1254 197.93 22.0491 189.642 22.0491C184.117 22.0491 178.408 24.0872 174.724 27.0518L171.225 20.5668C176.014 16.6758 183.012 14.4523 190.563 14.4523C203.639 14.6376 210.822 20.9373 210.822 33.7221ZM202.35 47.8038V41.1335H189.274C180.802 41.1335 178.408 44.4687 178.408 48.3597C178.408 52.9918 182.275 55.9564 188.721 55.9564C195.167 56.1417 200.324 53.3624 202.35 47.8038Z"
                        fill="#FF6060"
                    />
                    <path d="M92.0322 49.842V62.4414L97.3731 59.2916V46.6921L92.0322 49.842Z" fill="#FF6060" />
                    <path
                        d="M106.766 34.4632L84.8496 21.6785L72.6944 14.6376L60.7234 35.5749L60.9076 55.2153L82.6396 68L84.8496 66.703V48.1744L94.6106 30.9428L104.556 36.6866V55.2153L106.766 53.9183V34.4632Z"
                        fill="#FF6060"
                    />
                </svg>
                <nav className="flex flex-row justify-center items-center">
                    <ul className="flex flex-row gap-6 lg:gap-16 uppercase font-medium text-sm text-center items-center lg:text-2xl lg:normal-case ">
                        <li className="hover:text-red-400 duration-500">
                        <NavLink
                                to="/"
                                style={({ isActive }) => {
                                    return {
                                        textDecorationLine: isActive ? "underline" : ""
                                    };
                                }}
                            >
                                Accueil
                            </NavLink>
                        </li>
                        <li className="hover:text-red-400 duration-500">
                            <NavLink
                                to="/a-propos"
                                style={({ isActive }) => {
                                    return {
                                        textDecorationLine: isActive ? "underline" : ""
                                    };
                                }}
                            >
                                À Propos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
