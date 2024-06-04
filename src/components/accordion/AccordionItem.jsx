export default function AccordionItem({ title, children, className }) {
  return <li>
    <h3 className={ className }>{ title }</h3>
    <div>{ children }</div>
  </li>
}