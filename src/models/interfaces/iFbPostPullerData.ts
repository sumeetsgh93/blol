import {Schema, Types} from "mongoose";
import {FbPostStatus} from "../../constants/enums/fbPostStatus";
export interface IFbPostPullerData {
    postId: string;
    jsonData: string;
    postCreationTime: Schema.Types.Date;
    status: FbPostStatus;
}