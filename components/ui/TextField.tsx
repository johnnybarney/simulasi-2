import { cn } from "@/lib/cn";

type TextFieldProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "tel";
  name: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

export function TextField({
  id,
  label,
  type = "text",
  name,
  required,
  placeholder,
  className,
}: TextFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium text-cyan-neon">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-b-2 border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/30 transition-colors focus:border-cyan-neon focus:outline-none"
      />
    </div>
  );
}

type TextAreaProps = {
  id: string;
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  className?: string;
};

export function TextArea({
  id,
  label,
  name,
  required,
  placeholder,
  rows = 5,
  className,
}: TextAreaProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium text-cyan-neon">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-none border-b-2 border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/30 transition-colors focus:border-cyan-neon focus:outline-none"
      />
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
  className?: string;
};

export function SelectField({
  id,
  label,
  name,
  options,
  required,
  className,
}: SelectFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium text-cyan-neon">
        {label}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className="w-full border-b-2 border-white/20 bg-cyber-bg px-0 py-3 text-white transition-colors focus:border-cyan-neon focus:outline-none"
      >
        <option value="" disabled className="bg-cyber-bg text-white/50">
          Select inquiry type
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-cyber-bg text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
