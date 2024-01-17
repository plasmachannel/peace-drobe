import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const FilterIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <Path d="M30 6.749H2a1.25 1.25 0 0 0 0 2.5h28a1.25 1.25 0 0 0 0-2.5zm-6 8.001H8a1.25 1.25 0 0 0 0 2.5h16a1.25 1.25 0 0 0 0-2.5zm-5 8h-6.053a1.25 1.25 0 0 0 0 2.5H19a1.25 1.25 0 0 0 0-2.5z" />
  </Svg>
)
export default FilterIcon
