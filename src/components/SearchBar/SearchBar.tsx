import { IconContext } from 'react-icons';
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FormEvent } from 'react';

interface SearchBarProps {
    handSub : (searchInp: string) => void;
}


const SearchBar = ({ handSub } : SearchBarProps) => {

    const onSub = (e : FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const search = (form.elements.namedItem("search") as HTMLInputElement).value.trim();
        if (search === "") {
            toast.error("Input field is empty!");
            return;
        }
        handSub(search);
    }

    return (
        <header className={css.header}>
            <form onSubmit={onSub} className={css.headerForm}>
                <input
                    className={css.formInp}
                    type="text"
                    name="search"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit" className={css.formBtn}>
                    <IconContext.Provider value={{size: "20px", color: "dimgray"}}>
                        <IoIosSearch />
                    </IconContext.Provider>
                </button>
            </form>
        </header>
    )
}

export default SearchBar;