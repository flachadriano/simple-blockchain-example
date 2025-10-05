import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/hash.tsx"),
  route('block', 'routes/block.tsx'),
  route('blockchain', 'routes/blockchain.tsx')
] satisfies RouteConfig;
