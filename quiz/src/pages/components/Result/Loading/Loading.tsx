import style from "./Loading.module.css";

export default function Loading({active}:any) {
  return (
    <div className={`${style.loading} ${active? style.isActive :""}`}>
    <span>Final Result</span>
    

    </div>
  )
}
