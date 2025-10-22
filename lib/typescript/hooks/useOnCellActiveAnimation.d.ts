import { WithSpringConfig } from "react-native-reanimated";
declare type Params = {
  animationConfig: Partial<WithSpringConfig>;
};
export declare function useOnCellActiveAnimation({
  animationConfig,
}?: Params): {
  isActive: boolean;
  onActiveAnim: Readonly<{
    value: 0 | 1;
  }>;
};
export {};
