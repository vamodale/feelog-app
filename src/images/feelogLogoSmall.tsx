import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const FeelogLogoSmall = (props: SvgProps) => (
  <Svg
    width={212}
    height={32}
    fill="none"
    {...props}
  >
    <Circle cx={196} cy={16} r={16} fill="#00C463" />
    <Path
      d="M198.739 14.062a2.622 2.622 0 0 0-1.056-1.072c-.448-.246-.97-.368-1.568-.368-.661 0-1.248.149-1.76.448a3.094 3.094 0 0 0-1.2 1.28c-.288.554-.432 1.194-.432 1.92 0 .746.144 1.397.432 1.952.299.554.71.98 1.232 1.28.523.298 1.131.448 1.824.448.854 0 1.552-.224 2.096-.672.544-.46.902-1.094 1.072-1.904h-3.84v-1.712h6.048v1.952a5.237 5.237 0 0 1-.96 2.16 5.469 5.469 0 0 1-1.904 1.6c-.768.394-1.632.592-2.592.592-1.077 0-2.053-.24-2.928-.72a5.433 5.433 0 0 1-2.048-2.032c-.49-.864-.736-1.846-.736-2.944 0-1.1.246-2.08.736-2.944a5.285 5.285 0 0 1 2.048-2.032c.875-.491 1.846-.736 2.912-.736 1.259 0 2.352.309 3.28.928.928.608 1.568 1.466 1.92 2.576h-2.576Z"
      fill="#232327"
    />
    <Circle cx={160} cy={16} r={16} fill="#4DA6FF" />
    <Path
      d="M160.007 21.982a5.782 5.782 0 0 1-2.88-.736 5.51 5.51 0 0 1-2.08-2.032c-.512-.875-.768-1.862-.768-2.96 0-1.088.256-2.064.768-2.928a5.475 5.475 0 0 1 2.08-2.048 5.782 5.782 0 0 1 2.88-.736c1.056 0 2.016.245 2.88.736a5.372 5.372 0 0 1 2.064 2.048c.512.864.768 1.84.768 2.928 0 1.098-.256 2.085-.768 2.96a5.405 5.405 0 0 1-2.064 2.032 5.788 5.788 0 0 1-2.88.736Zm0-2c.672 0 1.264-.15 1.776-.448a3.18 3.18 0 0 0 1.2-1.312c.288-.566.432-1.222.432-1.968 0-.747-.144-1.398-.432-1.952a3.074 3.074 0 0 0-1.2-1.296c-.512-.3-1.104-.448-1.776-.448-.672 0-1.27.149-1.792.448-.512.298-.912.73-1.2 1.296-.288.554-.432 1.205-.432 1.952 0 .746.144 1.402.432 1.968a3.18 3.18 0 0 0 1.2 1.312c.522.298 1.12.448 1.792.448Z"
      fill="#232327"
    />
    <Circle cx={124} cy={16} r={16} fill="#FFFFEB" />
    <Path
      d="M123.672 20.094h3.68v1.776h-5.92V10.702h2.24v9.392Z"
      fill="#232327"
    />
    <Circle cx={88} cy={16} r={16} fill="#FFE478" />
    <Path
      d="M87.086 12.51v2.8h3.76v1.776h-3.76v2.96h4.24v1.824h-6.48V10.686h6.48v1.824h-4.24Z"
      fill="#232327"
    />
    <Circle cx={52} cy={16} r={16} fill="#FFA34C" />
    <Path
      d="M51.086 12.51v2.8h3.76v1.776h-3.76v2.96h4.24v1.824h-6.48V10.686h6.48v1.824h-4.24Z"
      fill="#232327"
    />
    <Circle cx={16} cy={16} r={16} fill="#FF4E41" />
    <Path
      d="M19.758 10.702v1.808h-4.656v2.864h3.568v1.776h-3.568v4.72h-2.24V10.702h6.896Z"
      fill="#232327"
    />
  </Svg>
)

export default FeelogLogoSmall