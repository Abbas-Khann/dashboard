import { Flex, PropsOf } from "@chakra-ui/react";
import { ChakraNextImage } from "components/Image";
import { StaticImageData } from "next/image";
import { Card, Heading, Text, TrackedLink } from "tw-components";
import { ComponentWithChildren } from "types/component-with-children";

interface GettingStartedCardProps {
  title: string;
  description: string | JSX.Element;
  linkProps?: PropsOf<typeof TrackedLink>;
  icon: StaticImageData;
}

export const GettingStartedCard: ComponentWithChildren<
  GettingStartedCardProps
> = ({ title, description, linkProps, icon, children }) => {
  return (
    <Card as={Flex} flexDir="column" gap={3} p={6}>
      <Flex align="center" gap={2}>
        <ChakraNextImage
          flexShrink={0}
          boxSize={{ base: 8, md: 12 }}
          src={icon}
          alt=""
        />
        <Heading size="title.sm">{title}</Heading>
      </Flex>
      <Text size="body.md">{description}</Text>

      {linkProps && (
        <TrackedLink
          mt="auto"
          gap={1.5}
          color="blue.500"
          transition="all 0.2s"
          _light={{
            color: "blue.600",
          }}
          alignSelf="flex-end"
          alignItems="center"
          display="flex"
          _hover={{
            opacity: 0.8,
            textDecor: "underline",
            gap: 2,
            transform: "translateX(2px)",
          }}
          {...linkProps}
        />
      )}
      {children}
    </Card>
  );
};
