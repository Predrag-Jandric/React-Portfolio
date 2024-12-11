
// hamburger menu icon settings and properties

export const Path = (props) => (
    <path
        fill="#f1f1f1"
        strokeWidth="3"
        stroke="#f1f1f1"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggleBtn = ({ toggle }) => (
    <button className="menuToggleBtn" onClick={toggle}>
        <svg width="32" height="32" viewBox="0 0 23 18">
            <Path
                d="M 2 2.5 L 20 2.5"
                className="top"
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
            <Path
                d="M 2 16.346 L 20 16.346"
                className="bottom"
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);