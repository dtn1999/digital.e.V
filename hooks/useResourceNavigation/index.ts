import { createHygraphClient } from '@app/lib';
import { EventOrderByInput, EventWhereInput, Locale, ProjectOrderByInput, ProjectWhereInput } from '@app/types/graphql';
import { useRouter } from 'next/router';
import React from 'react';

const hygraphClient = createHygraphClient(false);

interface GetResourceSlugParams {
    locale: Locale;
    where: EventWhereInput | ProjectWhereInput;
    orderBy?: EventOrderByInput | ProjectOrderByInput;
    direction: 'next' | 'prev'
}

interface UseResourceNavigationParams{
    locale: Locale;
    resource: 'events' | 'projects',
    query: string;
    nextWhere: EventWhereInput | ProjectWhereInput,
    prevWhere: EventWhereInput | ProjectWhereInput,
    nextOrderBy?: EventOrderByInput | ProjectOrderByInput,
    prevOrderBy?: EventOrderByInput | ProjectOrderByInput,

}
export const useResourceNavigation = (params: UseResourceNavigationParams) => {
  const {resource, query, nextWhere,prevWhere, nextOrderBy, prevOrderBy, locale} = params;
  const router = useRouter();
  const [nextResourceSlug, setNextResourceSlug] = React.useState<string | undefined>(
    undefined
  );
  const [prevResourceSlug, setPrevResourceSlug] = React.useState<string | undefined>(
    undefined
  );

  const getResourceSlug = React.useCallback(async ({
      locale,
      where,
      direction,
      orderBy
    }: GetResourceSlugParams) => {
        const { resources } = await hygraphClient.request(
            query,
        { locale, where, orderBy }
        );
        if (resources.length > 0) {
          direction === "next" ? setNextResourceSlug(resources[0].slug) : setPrevResourceSlug(resources[0].slug);
        } else {
        direction === "next" ? setNextResourceSlug(undefined) : setPrevResourceSlug(undefined);
    }
    },
    [query]
    );
    
    React.useEffect(() => {
      getResourceSlug({
        locale,
        where: nextWhere,
        direction: "next",
        orderBy: nextOrderBy,
      });
      getResourceSlug({
        locale,
        where: prevWhere,
        direction: "prev",
        orderBy: prevOrderBy,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextWhere, prevWhere, nextOrderBy, prevOrderBy]);

    const handleNextClick = () => {
        if (nextResourceSlug) {
            router.push(`/${resource}/${nextResourceSlug}`);
        }
    };

    const handlePrevClick = () => {
        if (prevResourceSlug) {
        router.push(`/${resource}/${prevResourceSlug}`);
        }
    };

    return {
        nextResourceSlug,
        prevResourceSlug,
        handleNextClick,
        handlePrevClick,
    }
}