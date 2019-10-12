/* 路由管理模块 */
/* 路由懒加载
使用import函数：被引入的模块单独打包（生成一个单独的打包文件）
配置的component：返回import（）得到的模块，只有当请求对应的path，才会执行此函数，从后台获取相应的包
优点：减少首屏js  按需加载路由
*/
const Home = () => import("../pages/home/Home.vue")
const Category = () => import("../pages/category/Category.vue");
const Reco = () => import("../pages/reco/Reco.vue");
const Cart = () => import("../pages/cart/Cart.vue");

const Profile = () => import("../pages/profile/Profile.vue");
const Phone = () => import("../pages/profile/phone/Phone.vue");
const Email = () => import("../pages/profile/email/Email.vue");
const Login = () => import("../pages/profile/login/Login.vue");
const Register = () => import("../pages/profile/register/Register.vue");

const RecoFind = () => import("../pages/reco/recoFind/RecoFind.vue");
const RecoSelect = () => import("../pages/reco/recoSelect/RecoSelect.vue");
const Search = () => import("../pages/search/Search.vue");


export default [
  {
    path: "/home",
    component: Home,
    meta:{
      isShowFooter:true
    }
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/category",
    component: Category,
    meta: {
       isShowFooter: true
    }
  },
  {
    path: "/cart",
    component: Cart,
    meta: {
       isShowFooter: true
    }
  },
  {
    path: "/reco",
    component: Reco,
    meta: {
       isShowFooter: true
    },
    children:[
      {
        path: "find",
        component: RecoFind,
      },
      {
        path: "select",
        component: RecoSelect,
      }
    ]
  },
  {
    path: "/profile",
    component: Profile,
    redirect: '/profile/login',
    children:[
      {
        path: "/profile/phone",
        component: Phone,
        meta: {
          isShowImg: true
        }
      },
      {
        path: "email",
        component: Email,
        meta: {
          isShowImg: true
        }
      },
      {
        path: "login",
        component: Login,
        meta: {
          isShowImg: true
        }
      },
      {
        path: "register",
        component: Register,
        meta: {
          isShowImg: false
        }
      }
    ]
  },
  {
    path: "/profile",
    redirect: "/profile/login"
  },
  {
    path: "/",
    redirect: "/home"
  }
]