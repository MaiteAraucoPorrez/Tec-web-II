import "./Badge.css";

type Variant = "beginner" | "intermediate" | "advanced";

type BadgeProps = {
    children: React.ReactNode;
    variant?: Variant;
};

function Badge({ children, variant = "beginner" }: BadgeProps) {
    return (
        <span className={`badge ${variant}`}>
            {children}
        </span>
    );
}

export default Badge;
