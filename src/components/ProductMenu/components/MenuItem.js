import React from 'react'



function ShowMenuItem({categoriesName, name_1,name_2,name_3,name_4,
                                 name_5,name_6,name_7,name_8,name_9,name_10,
                                 name_11,name_12,name_13,name_14,name_15,name_16,
                                 name_17, name_18, name_19, name_20}){
    return (
        <div className="select-menu">
            <div className={"showMenu"}>
                <h3><span><i className="fas fa-chevron-right" /></span> Просмотреть все объявления в &emsp;
                    <span style={{color: "#abb3b6"}}>{categoriesName}</span>
                </h3>
                <hr/>
                <ul>
                    <div>
                        {name_1 && (<li>{name_1} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_2 && (<li>{name_2} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_3 && (<li>{name_3} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_4 && (<li>{name_4} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_17 && (<li>{name_17} <span><i className="fas fa-chevron-right" /></span></li>)}
                    </div>
                    <div>
                        {name_5 && (<li>{name_5} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_6 && (<li>{name_6} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_7 && (<li>{name_7} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_8 && (<li>{name_8} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_18 && (<li>{name_18} <span><i className="fas fa-chevron-right" /></span></li>)}
                    </div>
                    <div>
                        {name_9 && (<li>{name_9} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_10 && (<li>{name_10} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_11 && (<li>{name_11} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_12 && (<li>{name_12} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_19 && (<li>{name_19} <span><i className="fas fa-chevron-right" /></span></li>)}
                    </div>
                    <div>
                        {name_13 && (<li>{name_13} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_14 && (<li>{name_14} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_15 && (<li>{name_15} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_16 && (<li>{name_16} <span><i className="fas fa-chevron-right" /></span></li>)}
                        {name_20 && (<li>{name_20} <span><i className="fas fa-chevron-right" /></span></li>)}

                    </div>

                </ul>
            </div>
        </div>
    )
}

export default ShowMenuItem