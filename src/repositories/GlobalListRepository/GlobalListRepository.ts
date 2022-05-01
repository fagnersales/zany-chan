import {
  getFirestore,
  getDoc,
  setDoc,
  doc
} from 'firebase/firestore'

import { IAnime } from '../../utils/types'

class GlobalListRepository {
  private db = getFirestore()

  public async get(name: IAnime['name']): Promise<IAnime | null> {
    const docRef = doc(this.db, `animes/${name}`)

    const animeDoc = await getDoc(docRef)

    if (!animeDoc.exists()) {
      return null
    }

    return animeDoc.data() as IAnime
  }

  public async save(anime: IAnime): Promise<void> {
    const docRef = doc(this.db, `animes/${anime.name}`)

    const animeDoc = await getDoc(docRef)

    if (animeDoc.exists()) {
      throw new Error('Anime already saved')
    }

    await setDoc(docRef, anime)
  }

  public async delete(name: IAnime['name']): Promise<void> {
    const docRef = doc(this.db, `animes/${name}`)

    const animeDoc = await getDoc(docRef)

    if (!animeDoc.exists()) {
      throw new Error('Anime not saved')
    }

    await setDoc(docRef, null)
  }
}

export const globalListRepository = new GlobalListRepository()