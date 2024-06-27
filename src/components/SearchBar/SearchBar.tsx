import { FormEvent } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const value = (form.topic as HTMLFormElement).value.trim();

    if (!value) {
      return toast.error("This input can't be empty!");
    }
    onSubmit(value);
    form.reset();
  };

  return (
    <header className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.inp}
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <RxMagnifyingGlass className={css.image_btn} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
