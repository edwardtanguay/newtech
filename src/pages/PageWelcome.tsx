import { useStoreState, useStoreActions } from "../store/hooks"
import { FaRegTrashCan } from "react-icons/fa6";

export const PageWelcome = () => {

	const flashcards = useStoreState((state) => state.flashcards);
	const deleteFlashcard = useStoreActions((actions) => actions.deleteFlashcard);

	return (
		<>
			<p>There are {flashcards.length} flashcards.</p>
			<ul className="list-disc ml-6">
				{flashcards.map((flashcard, index) => {
					return (
						<li>
						<div className="mt-2 flex gap-2" key={index}>{flashcard.front} - {flashcard.back} <FaRegTrashCan className="mt-1 hover:text-red-800 cursor-pointer" onClick={() => deleteFlashcard(flashcard.id)}/></div>
						</li>
					)
				})}
			</ul>
		</>
	)
}