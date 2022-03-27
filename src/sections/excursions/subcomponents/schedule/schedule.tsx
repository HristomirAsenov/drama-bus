import React, { FC } from "react";

import "./schedule.scss";

import blueDjamiq from "assets/images/blue-djamiq.jpg";
import emigranOne from "assets/images/emigran-one.jpeg";
import emigranTwo from "assets/images/emigran-two.jpg";
import hipodrum from "assets/images/hipodrum.jpg";
import saphire from "assets/images/saphire.jpg";
import waterGarden from "assets/images/water-garden.jpg";
import hotelFront from "assets/images/hotel-front.jpg";
import hotelRoom from "assets/images/hotel-room.jpg";
import kalapuCharshi from "assets/images/kapalu-charshi.jpg";
import dolmabahche from "assets/images/dolmabahche.jpg";
import turkuazooTwo from "assets/images/turkuazoo-two.jpg";
import saitStefan from "assets/images/saint-stefan.jpg";
import masurCharshi from "assets/images/masur-charshi.jpg";
import saitSofia from "assets/images/sait-sofia.jpg";
import forumMall from "assets/images/forum-mall.jpg";
import forumMallTwo from "assets/images/forum-mall-two.jpg";

import bosforOne from "assets/images/bosfor-one.jpg";
import bosforTwo from "assets/images/bosfor-two.jpg";


import { BiTrip } from "react-icons/bi";

const Schedule: FC = () => {

    return <div className="schedule">

        <div className="schedule-card">

            <div className="schedule-graphic">
                <span>Ден: 1</span>
                <BiTrip />
            </div>
            <div className="schedule-info">
                <p>Тръгване (21.04.2022 23:00ч) Смолян - паркинг пред храм "Свети Висарион Смоленски". Отпътуване в посока Турция.</p>
                <p>Почивка пред Свиленград на бензиностанция Shell за обмяна на валута. Преминаване на границата. Пристигане в Истанбул.</p>
                <p>Посещение на площад "Хиподрум", който представлява душана на туризма в Истанбул намираш се между "Света София" и Синята Джамия, които са обекти за посещения.</p>
                <div className="flex-container">
                    <img alt="Синята Джамия" src={blueDjamiq} width="500px" />
                    <img alt="Света София" src={saitSofia} width="400px" />
                    <img alt="Хиподрум" src={hipodrum} width="375px" />
                </div>


                <p>Програмата продължава с разходка до парк "Емирган" - емблематично за Истанбул място, особено през пролетта, когато е сезонът на лалетата. Следва посещение на Небостъргача "Сапфир", "Покривът" на Истанбул.</p>
                <div className="flex-container">
                    <img alt="Емигран" src={emigranTwo} width="500px" />
                    <img alt="Емигран" src={emigranOne} width="300px" />
                    <img alt="Сапфир" src={saphire} width="200px" />
                </div>

                <p>Настаняване в хотел "COMFORT LIFE" (четири звезден). Свободно време за шопинг на "Капалъ чарши".</p>
                <div className="flex-container">
                    <img alt="Хотел" src={hotelFront} width="400px" />
                    <img alt="Хотел" src={hotelRoom} width="400px" />
                    <img alt="Капалъ чарши" src={kalapuCharshi} width="400px" />

                </div>
            </div>
        </div>

        <div className="schedule-card">
            <div className="schedule-graphic">
                <span>Ден: 2</span>
                <BiTrip />

            </div>

            <div className="schedule-info">
                <p>Закуска. Посещение на Дворецът "Долмабахче", който е най-големият дворец в Турция. Разходка с корабче по Босфора.</p>
                <div className="flex-container">
                    <img alt="Долмабахче" src={dolmabahche} width="400px" />
                    <img alt="Босфор" src={bosforOne} width="400px" />
                    <img alt="Босфор" src={bosforTwo} width="400px" />
                </div>

                <p>Посещение на църквата "Свети Стефан" известна като Желязната църква, след това Египетския пазар известен още като Пазар на подправките или Мъсър чарши. И разбира се свободно време за пазаруване.</p>


                <p>Привечер посещение на една от най-новите атракции в мегаполиса "Water Garden" или пеещите фонтани. Ще наблюдаваме една изключителна хореография на ослепителна вода, светлина, лазерни, музикални и огнени шоута.</p>
                <p>Връщане в хотела. Нощувка. Вечеря пожелание в ресторант на Босфора или на корабче.</p>

                <div className="flex-container">
                    <img alt="Свети Стефан" src={saitStefan} width="400px" />
                    <img alt="Мъсър чарши" src={masurCharshi} width="400px" />
                    <img alt="Водна градина" src={waterGarden} width="400px" />
                </div>

            </div>

        </div>

        <div className="schedule-card">
            <div className="schedule-graphic">
                <span>Ден: 3</span>
                <BiTrip />
            </div>

            <div className="schedule-info">
                <p>Освобожваване на стаите. Посещение на МОЛ "FORUM" на територията на който се намират множество магазини и сензационния аквариум "TURKUAZOO" (без включена входна такса). Отпътуване за България.</p>
                <div className="flex-container">
                    <img alt="Форум мол" src={forumMall} width="400px" />
                    <img alt="Форум мол" src={forumMallTwo} width="500px" />
                    <img alt="Тюркуаз" src={turkuazooTwo} width="400px" />
                </div>

            </div>

        </div>
    </div>
};

export default Schedule;
