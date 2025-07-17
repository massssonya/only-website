"use client";

import { useDeleteNotes } from "../model/use-delete-notes"

export function DeletedNotesReminder() {
    const { deleteDeletedNotes } = useDeleteNotes()
    return (
        <div className="flex flex-row justify-center gap-6">
            <h1 className="text-xl self-center italic">Заметки удаляются из корзины через 7 дней.</h1>
            <button
                className="button text-blue-600 underline"
                onClick={deleteDeletedNotes}>Очистить корзину</button>
        </div>
    )
}