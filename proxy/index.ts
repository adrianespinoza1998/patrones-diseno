import { Proxy } from "./Proxy";
import { RealSubject } from "./RealSubject";

const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

proxy.request();
