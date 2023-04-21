/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PetProfileProps } from "./PetProfile";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetProfileCollectionOverridesProps = {
    PetProfileCollection?: PrimitiveOverrideProps<CollectionProps>;
    PetProfile?: PetProfileProps;
} & EscapeHatchProps;
export declare type PetProfileCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PetProfileProps;
} & {
    overrides?: PetProfileCollectionOverridesProps | undefined | null;
}>;
export default function PetProfileCollection(props: PetProfileCollectionProps): React.ReactElement;
