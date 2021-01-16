module.exports = [
    {
        title: 'Common',
        collapsable: false,
        sidebarDepth: 1,
        children: [
            ['/java/collection/', 'Collections Summary'],
            ['/java/collection/common/iterable', 'Iterable Interface'],
            ['/java/collection/common/collection', 'Collection Interface'],
            ['/java/collection/common/collections', 'Collections Class'],
            ['/java/collection/common/comparator', 'Comparator Interface'],
            ['/java/collection/common/comparable', 'Comparable Interface']
        ]
    },
    {
        title: 'List',
        collapsable: true,
        sidebarDepth: 1,
        children: [
            ['/java/collection/list/', 'List Summary'],
            ['/java/collection/list/list', 'List Interface'],
            ['/java/collection/list/array-list', 'ArrayList Class'],
            ['/java/collection/list/linked-list', 'LinkedList Class']
        ]
    },
    {
        title: 'Set',
        collapsable: true,
        sidebarDepth: 1,
        children: [
            ['/java/collection/set/', 'Set Summary'],
            ['/java/collection/set/set', 'Set Interface'],
            ['/java/collection/set/sorted-set', 'The Sorted Set Interface'],
            ['/java/collection/set/hash-set', 'Class HashSet'],
            ['/java/collection/set/linked-hash-set', 'Class LinkedHashSet']
        ]
    },
    {
        title: 'Queue',
        collapsable: true,
        sidebarDepth: 1,
        children: [
            ['/java/collection/queue/', 'Queue Summary'],
            ['/java/collection/queue/queue', 'The Queue Interface']
        ]
    },
    {
        title: 'Deque',
        collapsable: true,
        sidebarDepth: 1,
        children: [
            ['/java/collection/deque/', 'Deque Summary'],
            ['/java/collection/deque/deque', 'The Deque Interface']
        ]
    },
    {
        title: 'Map',
        collapsable: true,
        sidebarDepth: 1,
        children: [
            ['/java/collection/map/', 'Map Summary'],
            ['/java/collection/map/map', 'The Map Interface']
        ]
    }
]