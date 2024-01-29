import Male from "../assets/male.svg";
import Female from "../assets/female.svg";
export function CompanyCard({ company }) {
  return (
    <div
      className="flex flex-col sm:flex-row items-start w-full h-1/6 bg-slate-200 dark:bg-white rounded-xl p-5 px-16 justify-around dark:text-slate-600"
      key={company.id}
    >
      <div className="flex flex-col w-1/3">
        <h6 className="font-bold">{company.name}</h6>
        <small>{company.email}</small>
        <p>{company.country}</p>
      </div>
      <div className="w-1/3">
        <h6 className="flex gap-2 items-center">
          CONTACT MAN
          {company.contact.gender === "male" ? (
            <img src={Male}></img>
          ) : (
            <img src={Female}></img>
          )}
        </h6>
        <ol>
          <li className="flex gap-2">
            <strong>Name</strong>
            {company.contact.firstname}
          </li>
          <li className="flex gap-2">
            <strong>Email</strong>
            {company.contact.email}
          </li>
          <li className="flex gap-2">
            <strong>Phone</strong>
            {company.contact.phone}
          </li>
        </ol>
      </div>
      <div className="w-1/3">
        <h6>ADDRESSES</h6>
        <ul className="text-sm list-disc list-inside">
          {company.addresses.map((address) => (
            <li className="flex gap-1" key={address.zipcode}>
              <strong>{address.city}</strong>- {address.street}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
