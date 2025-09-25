import { R1 } from "./R1";
import { R2 } from "./R2";
import { R3 } from "./R3";

export const ReviewCard = () => {
    return (
        <>
            <div className="Review1">
                <R1 profileName="Andy" Pimg="images/p1.png" btnClass="btn-darkpurple " Best="best" Recommend="recommend" />
                <R2 profileName="Bobby" Pimg="images/p3.png" Orignal="orignal" btnClass=" btn-darkpurple" Recommend="recommend" />
            </div>
            <div className="Review1">
                <R2 profileName="Bobby" Pimg="images/p2.png" Orignal="orignal" btnClass=" best" Recommend="recommend" />
                 <R1 profileName="Andy" Pimg="images/p4.png" btnClass="btn-darkpurple " Best="best" Recommend="recommend" />
            </div>
            <div className="Review1">
                 <R3 profileName="Clindy" Pimg="images/p5.png" Orignal="orignal" btnClass="btn-darkpurple " Best="best" />
                 <R2 profileName="Bobby" Pimg="images/p2.png" Orignal="orignal" btnClass=" best" Recommend="recommend" />
            </div>
        </>
    );
};
