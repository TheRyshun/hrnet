import { useState } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { usePagination } from "@table-library/react-table-library/pagination";
import { Employee } from "../../App";
/**
 * EN : Component displaying the list of employees with a search and paging function
 * FR : Composant affichant la liste des employés avec une fonction de recherche et de pagination
 *
 * @component
 * @param {Employee[]} props.employees - The list of employees to be displayed
 * @returns {JSX.Element} A JSX element representing the list of employees with search and pagination functionalities
 */

const List: React.FC<{ employees: Employee[] }> = ({ employees }) => {
  /**
   * Initial employee data.
   * @type {Employee[]}
   */
  const initialData: Employee[] = employees;

  /**
  * EN : Data formatted for use in the CompactTable component
  * FR : Données formatées pour être utilisées dans le composant CompactTable
  */
  const data = {
    nodes: initialData.map((employee, index) => ({
      ...employee,
      id: index.toString(),
    })),
  };

  /**
  * EN : Pagination to manage navigation in the employee list
  * FR : Pagination pour gérer la navigation dans la liste des employés
  */

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 2,
    },
  });

  /**
   * EN : Local state to manage search value
   * FR : État local pour gérer la valeur de recherche
   * @type {string}
   */
  const [search, setSearch] = useState<string>("");

  /**
   * EN : Manages change of search value
   * FR : Gère le changement de la valeur de recherche
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - L'événement de changement d'input.
   */
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  
  // EN : Filter data by search
  // FR : Filtrer les données en fonction de la recherche

  const filteredData = {
    nodes: data.nodes.filter(
      (item) =>
        item.FirstName.toLowerCase().includes(search.toLowerCase()) ||
        item.LastName.toLowerCase().includes(search.toLowerCase()) ||
        item.DateOfBirth.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).includes(search) ||
        item.startline
          .toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .includes(search) ||
        item.departement.toLowerCase().includes(search.toLowerCase()) ||
        item.Street.toLowerCase().includes(search.toLowerCase()) ||
        item.City.toLowerCase().includes(search.toLowerCase()) ||
        item.PostalCode.toLowerCase().includes(search.toLowerCase())
    ),
  };

  /**
   * EN : Columns to be displayed in the table
   * FR : Colonnes à afficher dans le tableau
   */
  const COLUMNS = [
    { label: "Prénom", renderCell: (item: Employee) => item.FirstName },
    { label: "Nom", renderCell: (item: Employee) => item.LastName },
    {
      label: "Date Naiss.",
      renderCell: (item: Employee) =>
        item.DateOfBirth.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    {
      label: "Date Démar.",
      renderCell: (item: Employee) =>
        item.startline.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    { label: "Département", renderCell: (item: Employee) => item.departement },
    { label: "Rue", renderCell: (item: Employee) => item.Street },
    { label: "Ville", renderCell: (item: Employee) => item.City },
    { label: "État", renderCell: (item: Employee) => item.State },
    { label: "Code postal", renderCell: (item: Employee) => item.PostalCode },
  ];

  return (
    <div className="forms">
      <div className="forms__title">Liste des employés</div>
      <div className="list">
        <div className="list__search">
          <div>
            <span className="list__searchText">Recherche (prénom, nom) :</span>
            <input
              className="list__input"
              id="search"
              type="text"
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>

        <CompactTable
          columns={COLUMNS}
          data={filteredData}
          pagination={pagination}
        />

        <div className="list_pagination">
          <span>
            Total Pages: {pagination.state.getTotalPages(filteredData.nodes)}
          </span>

          <span>
            Page :{" "}
            {pagination.state
              .getPages(filteredData.nodes)
              .map((_: number, index: number) => (
                <button
                  key={index}
                  type="button"
                  style={{
                    fontWeight:
                      pagination.state.page === index ? "bold" : "normal",
                  }}
                  onClick={() => pagination.fns.onSetPage(index)}
                >
                  {index + 1}
                </button>
              ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default List;
