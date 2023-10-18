import { defineStore } from "pinia";
import { UserControllerService, UserVo } from "../../../generated";
import ACCESS_ENUM from "@/access/accessEnum";

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserVo => ({
    createTime: undefined,
    id: 0,
    phone: undefined,
    userAvatar: undefined,
    userName: undefined,
    userProfile: undefined,
    userRole: ACCESS_ENUM.NOT_LOGIN,
  }),
  getters: {},
  actions: {
    setLoginUser(userVo: UserVo) {
      const {
        userName,
        userRole,
        id,
        userProfile,
        userAvatar,
        createTime,
        phone,
      } = userVo;
      this.userName = userName;
      this.userRole = userRole;
      this.userAvatar = userAvatar;
      this.userProfile = userProfile;
      this.createTime = createTime;
      this.id = id;
      this.phone = phone;
    },
    // 实现自动登陆原理：从本地存储获取token，并放在请求头中调用后端接口
    async getLoginUser() {
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        this.setLoginUser(res.data as UserVo);
      }
    },
  },
});
