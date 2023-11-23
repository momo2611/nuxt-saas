import { User } from "~/server/types";

export default defineEventHandler(async (e) => {
  await protectRoute(e);
  const user = e.context.user as User;
  const apiCount = await getApiLimitCount(user.id);
  return {
    ...user,
    apiCount,
  };
});
