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
                return <Link className={style.linkCategory} to={c.path} key={c.id}>
                    {c.name === "notebooks" ? <AiOutlineLaptop className={style.iconCategory} /> : null}
                    {c.name === "celulares" ? <GiSmartphone className={style.iconCategory} /> : null}
                    {c.name === "tablets" ? <BsTabletLandscape className={style.iconCategory} /> : null}
                    {c.name === "aires" ? <MdOutlineAcUnit className={style.iconCategory} /> : null}
                    {c.name === "rodados" ? <MdOutlineDirectionsBike className={style.iconCategory} /> : null}
                    {c.name === "televisores" ? <BiTv className={style.iconCategory} /> : null}
                    {c.name === "lavarropas" ? <MdOutlineLocalLaundryService className={style.iconCategory} /> : null}
                    {c.name}
                </Link>;
            })}

        </div>
    )
}

export default Category