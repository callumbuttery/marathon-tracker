import { StravaCard } from "../components/sections/StravaCard"
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Training: React.FC = () => {

    const [stravaData, setStravaData] = useState([]);
    const poly = "kwjpIhifVFj@KbAuBvJOvDMX[DCVb@hEf@tANpAFzDItEHdBj@~CjA|FzAbG\\hFEx@wAp@W~Bu@L{@lAkAcDe@d@gCLcAzAOl@B|C_@pA[GSi@[}Bs@CkCfEd@fBEVe@\\iCj@eAjDuCKo@TwAy@mAFkB|CYzB^nAGvD|DmB~BlBf@RzAc@b@uAr@cAXaBh@IdA{C`Aq@f@DfAlAhAr@bAKpAf@b@r@L[fAQn@Do@qDAQNIzBdD~A`@h@lBpAq@nAkDkAaDUgGb@_CTb@`@GRqEDwBSgB^eKAqBu@kFPMjA\\t@vALKFiCYi@|@}@]iCr@oCf@gDVwDv@oAf@[Zs@@}@h@}@\\{Bz@_BvAm@rAw@h@AoAZZeCr@iCCoC`@qDIi@FyAeApBYT{E]iB^KKFiBHm@^a@lDk@d@_@?a@q@sCgAk@Oo@LQtANfAhA^pAZpC^S?RB[b@a@G_BjAkAdAbHC`Bc@jGk@`GQ|EaArDE|DeA|Bu@n@QdA?zAZ`A\\vEAlC\\zGBlIL`GSR]c@kBcH[a@c@zAE|Ar@bIC|AJpAQvBBz@`@tBFGgCdAQ\\sARCdCv@pBLbEH@El@Gs@Hx@CYEpDaAvAiBr@yBnFMdBq@\\kAhBwC^e@t@w@gA{AoKk@uGQ_@aJpC_Df@}BvIe@z@UFkFN}CkAiBIwAqBuCq@uHdEKGGu@]Xu@Bk@gAb@cCO_@?aBOKGgAI^c@`AmAAG`@XXHd@i@hA[JUUEa@LKWgC{AoKsC?iAbAy@oCk@eDUi@eAaAQm@Y_Ew@uCRuBp@kBG}@u@s@u@QsEl@_Cw@]FaBlBiBTi@IoBiCiAsCJ{Aj@{CtGqEhB|@B~@SCJ?`@bApBrC~BhC`DbAd@CDe@LCBlAZTf@~AZTlBVGWFKDyDjAeACmCtAoH^mFAmBoBGg@zC\\US`@cAvGk@YIYpAgGf@{DF}@KO{Ac@qEdH_BaEBqBSiAyCzBmAJi@[k@}@a@_B@eFV_GtCMhAk@tApJTlEd@ZfBc@jC~@`@wBl@_AnFsExJcGdBN\\e@Ai@JKbC@B}Fh@{C{@{@mA]yBaBe@kCDgGv@eAx@Q~AbAr@fIV`An@j@jBUW_HxAkAF]bAaAlBeFReAMVrDaFjAr@`HbCb@d@Lf@Kz@~Am@tCE"
    const tester = `http://maps.googleapis.com/maps/api/staticmap?path=enc:${poly}&size=200x200&format=jpg&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`

    useEffect(() => {
        async function fetchStravaData() {
            try {
                let response = await axios(`https://www.strava.com/api/v3/athlete/activities?access_token=${import.meta.env.VITE_STRAVA_KEY}`, {
                    method: 'GET',
                })

                if (!response.data) {
                    throw new Error('Failed to get strava data');
                }

                console.log('response: ', response.data)
                setStravaData(response.data);

                // const response2 = await axios(`http://maps.googleapis.com/maps/api/staticmap?path=enc:${props.obj.map.summary_polyline}&size=200x200&format=jpg&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`, {
                //     method: 'GET',
                // })

            } catch (e) {
                alert(e);
            }
        }

        fetchStravaData();
    }, []);

    return (
        <div className="h-full bg-gradient-to-tl from-blue-700 to-purple-700 pt-32">
            <h1 className="text-6xl flex justify-center text-white font-mono tracking-widest">TRAINING DIARY</h1>
            <img src={tester}/>
            <div className="place-items-center pt-10 pb-32 max-w-fit flex-wrap mx-auto max-sm:ml-8 flex justify-center max-sm:inline-block">
                {
                    stravaData.map(item => {
                        return <StravaCard obj={item} />
                    })
                }
            </div>
        </div>
    )
}