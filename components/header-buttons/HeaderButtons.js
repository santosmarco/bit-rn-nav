/* 
TODO:
  - Add a README.md file;  - Add options for rendering JSX on each side of an item;  - Add options for rendering different icon names according to the Platform's OS
*/

import React from "react";
import PropTypes from "prop-types";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";

const ICON_LIBRARIES = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

const getIconComponent = (iconLibraryKey) => ICON_LIBRARIES[iconLibraryKey];

const MyHeaderButtons = ({
  defaultIconLibrary,
  defaultIconSize = 23,
  defaultIconColor = "black",
  items = [{}],
}) => {
  return (
    <HeaderButtons
      HeaderButtonComponent={(props) => <HeaderButton {...props} />}
    >
      {items.map((item) => {
        if (!item.title)
          throw new Error(
            "All <HeaderButtons> items MUST contain a `title` prop."
          );

        return (
          <Item
            title={item.title}
            iconName={item.icon?.name}
            IconComponent={
              item.icon?.library
                ? getIconComponent(item.icon.library)
                : getIconComponent(defaultIconLibrary)
            }
            iconSize={item.icon?.size || defaultIconSize}
            color={item.icon?.color || defaultIconColor}
            buttonStyle={item.icon?.style}
            onPress={item.onPress}
            style={item.style}
          />
        );
      })}
    </HeaderButtons>
  );
};

MyHeaderButtons.propTypes = {
  defaultIconLibrary: PropTypes.oneOf(Object.keys(ICON_LIBRARIES)).isRequired,
  defaultIconSize: PropTypes.number,
  defaultIconColor: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.shape({
        name: PropTypes.string,
        library: PropTypes.oneOf(Object.keys(ICON_LIBRARIES)),
        size: PropTypes.number,
        color: PropTypes.string,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
      }),
      onPress: PropTypes.func.isRequired,
      style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    })
  ),
};

export default MyHeaderButtons;
