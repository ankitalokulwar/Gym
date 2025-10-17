import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface RatingDropdownProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

// Word-based ratings
const ratings = [
  { value: "5", label: "Excellent" },
  { value: "4", label: "Very Good" },
  { value: "3", label: "Good" },
  { value: "2", label: "Fair" },
  { value: "1", label: "Poor" },
];

export default function RatingDropdown({ value, onChange, error }: RatingDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="rating-dropdown-wrapper" ref={dropdownRef}>
      <button
  type="button"
  className={`rating-dropdown-btn ${error ? "error" : ""}`} 
  onClick={() => setIsOpen(!isOpen)}
>
  {value ? ratings.find((r) => r.value === value)?.label : "Select Rating"}
  <ChevronDown className={`dropdown-icon ${isOpen ? "rotate" : ""}`} />
</button>

      {isOpen && (
        <ul className="rating-dropdown-list">
          {ratings.map((r) => (
            <li
              key={r.value}
              className="rating-dropdown-item"
              onClick={() => {
                onChange(r.value);
                setIsOpen(false);
              }}
            >
              {r.label}
            </li>
          ))}
        </ul>
      )}

<p className="rating-error-text">{error || "\u00A0"}</p>
    </div>
  );
}
