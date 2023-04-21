/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function PetProfile(props) {
  const { pet, overrides, ...rest } = props;
  const buttonThreeSixFiveZeroTwoSevenZeroOneOnClick = useDataStoreDeleteAction(
    { id: pet?.id, model: Pet, schema: schema }
  );
  return (
    <Flex
      gap="24px"
      direction="column"
      width="320px"
      height="578px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="24px 24px 114px 24px"
      backgroundColor="rgba(97,218,251,1)"
      {...getOverrideProps(overrides, "PetProfile")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 88px 0px 88px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="link"
          children="Delete"
          onClick={() => {
            buttonThreeSixFiveZeroTwoSevenZeroOneOnClick();
          }}
          {...getOverrideProps(overrides, "Button36502701")}
        ></Button>
      </Flex>
      <Image
        width="160px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={pet?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Name: "}${pet?.name}`}
          {...getOverrideProps(overrides, "Melinda Marcus")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Type: "}${pet?.type}`}
          {...getOverrideProps(overrides, "Type")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Age: "}${pet?.age}`}
          {...getOverrideProps(overrides, "Age")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"About: "}${pet?.about}`}
          {...getOverrideProps(overrides, "About")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Profile"
          {...getOverrideProps(overrides, "Button29766907")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Update"
          {...getOverrideProps(overrides, "Button36502689")}
        ></Button>
      </Flex>
    </Flex>
  );
}
