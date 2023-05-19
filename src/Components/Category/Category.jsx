import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineLaptop } from "react-icons/ai";
import { BiTv } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";
import { BsTabletLandscape } from "react-icons/bs";
import { MdOutlineDirectionsBike, MdOutlineLocalLaundryService, MdOutlineAcUnit } from "react-icons/md";
import style from "./Category.module.css"

const Category = ({ categories }) => {
    return (
        <div className={style.divGral} >
            {categories.map((c) => {
                return <Link to={c.path} key={c.id}>
                    {c.name === "notebooks" ? <AiOutlineLaptop /> : null}
                    {c.name === "celulares" ? <GiSmartphone /> : null}
                    {c.name === "tablets" ? <BsTabletLandscape /> : null}
                    {c.name === "aires" ? <MdOutlineAcUnit /> : null}
                    {c.name === "rodados" ? <MdOutlineDirectionsBike /> : null}
                    {c.name === "televisores" ? <BiTv /> : null}
                    {c.name === "lavarropas" ? <MdOutlineLocalLaundryService /> : null}
                    {c.name}
                </Link>;
            })}

        </div>
    )
}

export default Category